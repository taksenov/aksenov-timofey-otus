import { MOCK_DATA__FROM_EXAMPLE } from './@mocks';
import Result from './@mocks/result.json';

describe('Should be', () => {
  test('softly "equal" data from result.json and MOCK_DATA__FROM_EXAMPLE', () => {
    expect(MOCK_DATA__FROM_EXAMPLE.files.includes(Result.files[0])).toBe(true);
    expect(MOCK_DATA__FROM_EXAMPLE.files.includes(Result.files[1])).toBe(true);
    expect(MOCK_DATA__FROM_EXAMPLE.files.includes(Result.files[2])).toBe(true);
    expect(MOCK_DATA__FROM_EXAMPLE.files.includes(Result.files[3])).toBe(true);

    expect(MOCK_DATA__FROM_EXAMPLE.dirs.includes(Result.dirs[0])).toBe(true);
    expect(MOCK_DATA__FROM_EXAMPLE.dirs.includes(Result.dirs[1])).toBe(true);
    expect(MOCK_DATA__FROM_EXAMPLE.dirs.includes(Result.dirs[2])).toBe(true);
  });
});
