import type { NextPage } from 'next';
import { AspectRatio, Box, Button, Flex, Image } from '@chakra-ui/react';
import { colors } from '~/utils/color';
import { Header } from '~/components/common/Header';
import { IndexText } from '~/components/index/IndexText';
import { IndexButtons } from '~/components/index/IndexButtons';

const Home: NextPage = () => {
  return (
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
      backgroundColor={colors('background')}
      height={'100vh'}
      _before={{
        inset: '0',
        position: 'absolute',
        backgroundColor: colors('mainSecondly'),
        content: `" "`,
        clipPath: 'polygon(0 70%, 100% 50%, 100% 100%, 0% 100%)',
      }}
      fontFamily={`'Noto Sans JP', sans-serif`}
    >
      <Header maxWidth={'1200px'} width={'100%'} />
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        gap={8}
        flexDirection={'column'}
        pt={6}
        pb={6}
      >
        <IndexText
          conceptText={'簡単操作で漫画を一括投稿'}
          leadTexts={[
            '一枚一枚画像を選んで順番を間違えてやり直し...',
            'Threadlyなら一括で選択して後から並べ替えるのも簡単です',
          ]}
        />
        <IndexButtons />
      </Flex>
      <AspectRatio ratio={16 / 9} width={'650px'}>
        <Box rounded={6} outline={'solid 4px #ffffff'}>
          <img src={'https://via.placeholder.com/1920x1080'} />
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default Home;
