import * as fs from 'fs';
import * as path from 'path';

/**
 * Функция для вывода списка файлов и папок файловой системы
 *
 * @param {string} base
 * @returns Promise -- проси со следующим контрактом
 *                     resolve({ files: filesArr, dirs: dirsArr, });
 *                     reject(new Error('HANDLE_COILLECT_TREE_DATA_ERROR'));
 */
const tree = (base: string) => {
  return new Promise((resolve, reject) => {
    try {
      let dirsArr: string[] = [];
      let filesArr: string[] = [];

      const recurFunc = async (base: string) => {
        await fs.readdir(base, (err, files) => {
          if (err) {
            throw new Error('FS_DIR_READING_ERROR');
          }

          files.forEach(async item => {
            let localBase = path.join(base, item);
            await fs.stat(localBase, (err, state) => {
              if (err) {
                throw new Error('FS_STAT_READING_ERROR');
              }

              if (state.isFile()) {
                filesArr = [...filesArr, localBase];
              } else if (state.isDirectory()) {
                dirsArr = [...dirsArr, localBase];
                recurFunc(localBase);
              }
            });
          });

          if (files.length === 0) {
            resolve({
              files: filesArr,
              dirs: dirsArr,
            });
          }
        });
      };

      recurFunc(base);
    } catch (err) {
      console.error(err);
      reject(new Error('HANDLE_COLLECT_TREE_DATA_ERROR'));
    }
  });
};

export default tree;
