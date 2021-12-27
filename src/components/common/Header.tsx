import { Button, Flex, FlexProps } from '@chakra-ui/react';
import { colors } from '~/utils/color';
import { TwitterIcon } from '~/components/icons/TwitterIcon';
import { VFC } from 'react';

type Props = {} & FlexProps;

export const Header: VFC<Props> = ({ ...props }) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} px={4} py={4} {...props}>
      <Button variant={'transparent'} color={colors('textPrimary')} size={'sm'}>
        Threadly.dev
      </Button>
      <Button
        rightIcon={<TwitterIcon />}
        color={colors('textPrimary')}
        backgroundColor={'#ffffff'}
        variant="outline"
        rounded={'9999px'}
        size={'sm'}
      >
        Share
      </Button>
    </Flex>
  );
};
