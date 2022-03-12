import { Card, CardContent } from '@material-ui/core';
import { styled } from '@mui/system';

export const MyCard = () => {
  return (
    <Card>
      <CardContent>Test name</CardContent>
    </Card>
  );
};

export const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});
