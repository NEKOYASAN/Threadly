import { Button, Flex, FlexProps } from '@chakra-ui/react';
import { colors } from '~/utils/color';
import { VFC } from 'react';

type Props = {} & FlexProps;
export const IndexButtons: VFC<Props> = ({ ...props }) => {
  return (
    <Flex gap={8} justifyContent={'center'} alignItems={'center'} {...props}>
      <Button backgroundColor={colors('buttonPrimary')} color={'#ffffff'} size={'lg'}>
        Twitterでログイン
      </Button>
      <Button backgroundColor={colors('buttonSecondly')} color={colors('textPrimary')} size={'lg'}>
        投稿されたツイートを見る
      </Button>
    </Flex>
  );
};
