import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import {getApi} from '../helpers/api';

// ----------------------------------------------------------------------
const getUsers = async() => {
  const respond = await getApi('get', 'usuarios');
  return respond;
}
// const users = getUsers()?.map((_, index) => ({
const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  email: faker.company.companyName(),
  isVerified:'hola:v',
  status: sample(['active', 'banned']),
  document: sample([
    5,
    1,
    7,
    2,
    9,
    3,
    6,
    8,
    0,
    4,
  ]),
}));

export default users;
