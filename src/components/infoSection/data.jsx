import Wedding from './../../images/wedding.svg';
import Love_1 from './../../images/love_1.svg';
import TextField from './../../images/text_field.svg';

export const homeObjOne = {
    id:'about',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine:'Your dream weddings begins here',
    headLine:'In dreams and in love there are no impossibilities',
    description:'Get access to our exclusive site that allows you to dream your knots with knot.',
    buttonLabel:'Get started',
    imgStart:false,
    img: Wedding,
    alt:'wedding',
    dark:true,
    primary:true,
    darkText:false
}

export const homeObjTwo = {
    id:'discover',
    lightBg:true,
    lightText:false,
    lightTextDesc:true,
    topLine:'Wedding ',
    headLine:'In dreams and in love there are no impossibilities',
    description:'Get access to our exclusive site that allows you to dream your knots.',
    buttonLabel:'Get started',
    imgStart:true,
    img: Love_1,
    alt:'love_1',
    dark:false,
    primary:false,
    darkText:true
}

export const homeObjThree = {
    id:'signup',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'Wedding',
    headLine:'In dreams and in love there are no impossibilities',
    description:'Get access to our exclusive site that allows you to dream your knots.',
    buttonLabel:'Start Now',
    imgStart:false,
    img: TextField,
    alt:'wedding',
    dark:false,
    primary:false,
    darkText:true
}
