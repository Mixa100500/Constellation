import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: vi.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: vi.fn(), // deprecated
//     removeListener: vi.fn(), // deprecated
//     addEventListener: vi.fn(),
//     removeEventListener: vi.fn(),
//     dispatchEvent: vi.fn(),
//   })),
// })

// global.window.matchMedia = vi.fn().mockImplementation(query => ({
//   matches: false,
//   media: query,
//   onchange: null,
//   addListener: vi.fn(),
//   removeListener: vi.fn(),
// }));



afterEach(() => {
  cleanup()
})