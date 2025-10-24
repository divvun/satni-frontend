import '@testing-library/jest-dom';

// Mock global objects that might be missing in test environment
global.fetch = global.fetch || (() => Promise.resolve({
  json: () => Promise.resolve({}),
}));

// Setup for Material-UI if needed
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});