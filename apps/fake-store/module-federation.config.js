// @ts-check
/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'fake-store',
  remotes: ['products', 'cart']
};

module.exports = moduleFederationConfig;
