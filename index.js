const Locality = {
  install: function (Vue) {
    Vue.prototype.$locality = {
      async ufs() {
        return await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => res.json())
      },
      async cities(ufCode) {
        return await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufCode}/municipios`).then(res => res.json())
      }
    }
  }
}

module.exports = Locality;
