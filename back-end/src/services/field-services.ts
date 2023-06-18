import fieldRepositories from '../repositories/field-repositories.js'

async function getSoccerField() {
  const field = await fieldRepositories.getFild();
  return field;
}
const fieldServices = {
    getSoccerField
}
export default fieldServices;