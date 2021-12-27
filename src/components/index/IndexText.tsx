import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import { VFC } from 'react';
import { colors } from '~/utils/color';

type Props = {
  conceptText: string;
  leadTexts: string[];
} & FlexProps;

export const IndexText: VFC<Props> = ({ conceptText, leadTexts, ...props }) => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      flexDirection={'column'}
      gap={4}
      {...props}
    >
      <Heading as={'h1'} textColor={colors('textPrimary')} fontWeight={700} fontSize={36}>
        {conceptText}
      </Heading>
      <Box textColor={colors('textPrimary')} fontWeight={500} fontSize={18}>
        {leadTexts.map((leadText) => {
          return <Text key={leadText}>{leadText}</Text>;
        })}
      </Box>
    </Flex>
  );
};
