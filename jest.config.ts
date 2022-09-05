export default {
	clearMocks: true,

	coverageProvider: 'v8',
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	testEnvironment: 'jsdom',
	//testPathIgnorePatterns: ['/node_modules'],
	//setupFilesAfterEnv: ['@testing-library/react'],

	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
						decorators: true,
					},
					keepClassNames: true,
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
						react: {
							runtime: 'automatic',
						},
					},
				},
				module: {
					type: 'es6',
					noInterop: false,
				},
			},
		],
		'^.+\\.svg$': 'jest-transformer-svg',
	},
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-transformer-svg',
		'^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
		'^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': '<rootDir>src/mocks/image.js',
	},
};
