/**@type {import('ts-jest').JestConfigWithTsJest}**/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleDirectories: ['node_modules'], //  garantir que o Jest procure corretamente em node_modules
};

