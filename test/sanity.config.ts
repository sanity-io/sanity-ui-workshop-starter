import {defineConfig} from 'sanity'
import {createMockSanityClient} from 'sanity-testing-library'
import {schema} from './schema'

const mockClient = createMockSanityClient()

export default defineConfig({
  unstable_clientFactory: () => mockClient,
  projectId: 'test',
  dataset: 'test',
  schema,
  plugins: [],
})
