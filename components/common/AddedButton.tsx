import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

const AddedButton = () => {
  return (
    <Flex mt={12} justifyContent="center">
      <Link href="/new-note">
        <Button bg="orange.400" borderRadius="full" h="52px" w="52px">
          <Icon as={AiOutlinePlus} color="white" w={6} h={6} />
        </Button>
      </Link>
    </Flex>
  );
};

export default AddedButton;
