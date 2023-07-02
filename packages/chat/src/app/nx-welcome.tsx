/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

import { Button } from 'mxp-ui';

const alertOnClick = () => {
  alert('Clicked');
};

export function NxWelcome({ title }: { title: string }) {
  return <Button text={'Click me'} onClick={alertOnClick} />;
}

export default NxWelcome;
