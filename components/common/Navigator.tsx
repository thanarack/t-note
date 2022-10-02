import { Flex, Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft, AiOutlineLogout } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { userLoginAction } from '../actions/useAuthAction';

interface INavigator {
  showBackButton?: boolean;
}

const Navigator: React.FC<INavigator> = (props) => {
  const { showBackButton } = props;

  const router = useRouter();

  const dispatch = useDispatch();

  const onSignOut = () => {
    userLoginAction(dispatch, { isAuth: false, username: '' });
    return router.push('/login');
  };

  return (
    <Flex
      justifyContent={showBackButton ? 'space-between' : 'flex-end'}
      py={4}
      alignItems="center"
    >
      {showBackButton && (
        <Flex gap={2} onClick={() => router.back()}>
          <Icon as={AiOutlineArrowLeft} w={6} h={6} color="blackAlpha.800" />
          <Text>Back</Text>
        </Flex>
      )}
      <Flex gap={2} onClick={onSignOut}>
        <Icon as={AiOutlineLogout} w={6} h={6} color="blackAlpha.800" />
        <Text>Logout</Text>
      </Flex>
    </Flex>
  );
};

Navigator.defaultProps = {
  showBackButton: false,
};

export default Navigator;
