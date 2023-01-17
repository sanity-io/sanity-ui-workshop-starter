import {Box, Card, Container, Text} from '@sanity/ui'
import {useSelect} from '@sanity/ui-workshop'
import {CustomField} from '../CustomField'
import {useSchema} from 'sanity'

const typeNames = {
  test: 'Test',
}

export default function PropsStory() {
  const typeName = useSelect('Type name', typeNames, 'test') || ''

  const schema = useSchema()
  const schemaType = schema.get(typeName)

  if (!schemaType) {
    return (
      <Box>
        <Text>
          No schema of type: <code>{typeName}</code>
        </Text>
      </Box>
    )
  }

  return (
    <Container width={1}>
      <Box paddingX={4} paddingY={[5, 6, 7]}>
        <CustomField title={schemaType.title}>
          <Card border padding={3}>
            <Text>This is just an example</Text>
          </Card>
        </CustomField>
      </Box>
    </Container>
  )
}
