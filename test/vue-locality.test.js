const Vue = require('vue/dist/vue')
const Locality = require('../index')

Vue.use(Locality)

const mockSuccessResponseUf = [
  {
    "id": 11,
    "sigla": "RO",
    "nome": "Rondônia",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 12,
    "sigla": "AC",
    "nome": "Acre",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 13,
    "sigla": "AM",
    "nome": "Amazonas",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 14,
    "sigla": "RR",
    "nome": "Roraima",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 15,
    "sigla": "PA",
    "nome": "Pará",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 16,
    "sigla": "AP",
    "nome": "Amapá",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 17,
    "sigla": "TO",
    "nome": "Tocantins",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 21,
    "sigla": "MA",
    "nome": "Maranhão",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 22,
    "sigla": "PI",
    "nome": "Piauí",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 23,
    "sigla": "CE",
    "nome": "Ceará",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 24,
    "sigla": "RN",
    "nome": "Rio Grande do Norte",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 25,
    "sigla": "PB",
    "nome": "Paraíba",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 26,
    "sigla": "PE",
    "nome": "Pernambuco",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 27,
    "sigla": "AL",
    "nome": "Alagoas",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 28,
    "sigla": "SE",
    "nome": "Sergipe",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 29,
    "sigla": "BA",
    "nome": "Bahia",
    "regiao": {
      "id": 2,
      "sigla": "NE",
      "nome": "Nordeste"
    }
  },
  {
    "id": 31,
    "sigla": "MG",
    "nome": "Minas Gerais",
    "regiao": {
      "id": 3,
      "sigla": "SE",
      "nome": "Sudeste"
    }
  },
  {
    "id": 32,
    "sigla": "ES",
    "nome": "Espírito Santo",
    "regiao": {
      "id": 3,
      "sigla": "SE",
      "nome": "Sudeste"
    }
  },
  {
    "id": 33,
    "sigla": "RJ",
    "nome": "Rio de Janeiro",
    "regiao": {
      "id": 3,
      "sigla": "SE",
      "nome": "Sudeste"
    }
  },
  {
    "id": 35,
    "sigla": "SP",
    "nome": "São Paulo",
    "regiao": {
      "id": 3,
      "sigla": "SE",
      "nome": "Sudeste"
    }
  },
  {
    "id": 41,
    "sigla": "PR",
    "nome": "Paraná",
    "regiao": {
      "id": 4,
      "sigla": "S",
      "nome": "Sul"
    }
  },
  {
    "id": 42,
    "sigla": "SC",
    "nome": "Santa Catarina",
    "regiao": {
      "id": 4,
      "sigla": "S",
      "nome": "Sul"
    }
  },
  {
    "id": 43,
    "sigla": "RS",
    "nome": "Rio Grande do Sul",
    "regiao": {
      "id": 4,
      "sigla": "S",
      "nome": "Sul"
    }
  },
  {
    "id": 50,
    "sigla": "MS",
    "nome": "Mato Grosso do Sul",
    "regiao": {
      "id": 5,
      "sigla": "CO",
      "nome": "Centro-Oeste"
    }
  },
  {
    "id": 51,
    "sigla": "MT",
    "nome": "Mato Grosso",
    "regiao": {
      "id": 5,
      "sigla": "CO",
      "nome": "Centro-Oeste"
    }
  },
  {
    "id": 52,
    "sigla": "GO",
    "nome": "Goiás",
    "regiao": {
      "id": 5,
      "sigla": "CO",
      "nome": "Centro-Oeste"
    }
  },
  {
    "id": 53,
    "sigla": "DF",
    "nome": "Distrito Federal",
    "regiao": {
      "id": 5,
      "sigla": "CO",
      "nome": "Centro-Oeste"
    }
  }
];
const mockSuccessResponseCities = [
  {
    "id": 1100015,
    "nome": "Alta Floresta D'Oeste",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100023,
    "nome": "Ariquemes",
    "microrregiao": {
      "id": 11003,
      "nome": "Ariquemes",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100031,
    "nome": "Cabixi",
    "microrregiao": {
      "id": 11008,
      "nome": "Colorado do Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110006,
      "nome": "Vilhena",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100049,
    "nome": "Cacoal",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100056,
    "nome": "Cerejeiras",
    "microrregiao": {
      "id": 11008,
      "nome": "Colorado do Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110006,
      "nome": "Vilhena",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100064,
    "nome": "Colorado do Oeste",
    "microrregiao": {
      "id": 11008,
      "nome": "Colorado do Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110006,
      "nome": "Vilhena",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100072,
    "nome": "Corumbiara",
    "microrregiao": {
      "id": 11008,
      "nome": "Colorado do Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110006,
      "nome": "Vilhena",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100080,
    "nome": "Costa Marques",
    "microrregiao": {
      "id": 11002,
      "nome": "Guajará-Mirim",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100098,
    "nome": "Espigão D'Oeste",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100106,
    "nome": "Guajará-Mirim",
    "microrregiao": {
      "id": 11002,
      "nome": "Guajará-Mirim",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110001,
      "nome": "Porto Velho",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100114,
    "nome": "Jaru",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110003,
      "nome": "Jaru",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100122,
    "nome": "Ji-Paraná",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100130,
    "nome": "Machadinho D'Oeste",
    "microrregiao": {
      "id": 11003,
      "nome": "Ariquemes",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110003,
      "nome": "Jaru",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100148,
    "nome": "Nova Brasilândia D'Oeste",
    "microrregiao": {
      "id": 11005,
      "nome": "Alvorada D'Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100155,
    "nome": "Ouro Preto do Oeste",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100189,
    "nome": "Pimenta Bueno",
    "microrregiao": {
      "id": 11007,
      "nome": "Vilhena",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100205,
    "nome": "Porto Velho",
    "microrregiao": {
      "id": 11001,
      "nome": "Porto Velho",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110001,
      "nome": "Porto Velho",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100254,
    "nome": "Presidente Médici",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100262,
    "nome": "Rio Crespo",
    "microrregiao": {
      "id": 11003,
      "nome": "Ariquemes",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100288,
    "nome": "Rolim de Moura",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100296,
    "nome": "Santa Luzia D'Oeste",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100304,
    "nome": "Vilhena",
    "microrregiao": {
      "id": 11007,
      "nome": "Vilhena",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110006,
      "nome": "Vilhena",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100320,
    "nome": "São Miguel do Guaporé",
    "microrregiao": {
      "id": 11005,
      "nome": "Alvorada D'Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100338,
    "nome": "Nova Mamoré",
    "microrregiao": {
      "id": 11001,
      "nome": "Porto Velho",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110001,
      "nome": "Porto Velho",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100346,
    "nome": "Alvorada D'Oeste",
    "microrregiao": {
      "id": 11005,
      "nome": "Alvorada D'Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100379,
    "nome": "Alto Alegre dos Parecis",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100403,
    "nome": "Alto Paraíso",
    "microrregiao": {
      "id": 11003,
      "nome": "Ariquemes",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100452,
    "nome": "Buritis",
    "microrregiao": {
      "id": 11001,
      "nome": "Porto Velho",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100502,
    "nome": "Novo Horizonte do Oeste",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100601,
    "nome": "Cacaulândia",
    "microrregiao": {
      "id": 11003,
      "nome": "Ariquemes",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100700,
    "nome": "Campo Novo de Rondônia",
    "microrregiao": {
      "id": 11001,
      "nome": "Porto Velho",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100809,
    "nome": "Candeias do Jamari",
    "microrregiao": {
      "id": 11001,
      "nome": "Porto Velho",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110001,
      "nome": "Porto Velho",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100908,
    "nome": "Castanheiras",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100924,
    "nome": "Chupinguaia",
    "microrregiao": {
      "id": 11007,
      "nome": "Vilhena",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110006,
      "nome": "Vilhena",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1100940,
    "nome": "Cujubim",
    "microrregiao": {
      "id": 11001,
      "nome": "Porto Velho",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101005,
    "nome": "Governador Jorge Teixeira",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110003,
      "nome": "Jaru",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101104,
    "nome": "Itapuã do Oeste",
    "microrregiao": {
      "id": 11001,
      "nome": "Porto Velho",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110001,
      "nome": "Porto Velho",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101203,
    "nome": "Ministro Andreazza",
    "microrregiao": {
      "id": 11006,
      "nome": "Cacoal",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101302,
    "nome": "Mirante da Serra",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101401,
    "nome": "Monte Negro",
    "microrregiao": {
      "id": 11003,
      "nome": "Ariquemes",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110002,
      "nome": "Ariquemes",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101435,
    "nome": "Nova União",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101450,
    "nome": "Parecis",
    "microrregiao": {
      "id": 11007,
      "nome": "Vilhena",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101468,
    "nome": "Pimenteiras do Oeste",
    "microrregiao": {
      "id": 11008,
      "nome": "Colorado do Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110006,
      "nome": "Vilhena",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101476,
    "nome": "Primavera de Rondônia",
    "microrregiao": {
      "id": 11007,
      "nome": "Vilhena",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101484,
    "nome": "São Felipe D'Oeste",
    "microrregiao": {
      "id": 11007,
      "nome": "Vilhena",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110005,
      "nome": "Cacoal",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101492,
    "nome": "São Francisco do Guaporé",
    "microrregiao": {
      "id": 11002,
      "nome": "Guajará-Mirim",
      "mesorregiao": {
        "id": 1101,
        "nome": "Madeira-Guaporé",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101500,
    "nome": "Seringueiras",
    "microrregiao": {
      "id": 11005,
      "nome": "Alvorada D'Oeste",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101559,
    "nome": "Teixeirópolis",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101609,
    "nome": "Theobroma",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110003,
      "nome": "Jaru",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101708,
    "nome": "Urupá",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101757,
    "nome": "Vale do Anari",
    "microrregiao": {
      "id": 11003,
      "nome": "Ariquemes",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110003,
      "nome": "Jaru",
      "regiao-intermediaria": {
        "id": 1101,
        "nome": "Porto Velho",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  },
  {
    "id": 1101807,
    "nome": "Vale do Paraíso",
    "microrregiao": {
      "id": 11004,
      "nome": "Ji-Paraná",
      "mesorregiao": {
        "id": 1102,
        "nome": "Leste Rondoniense",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    },
    "regiao-imediata": {
      "id": 110004,
      "nome": "Ji-Paraná",
      "regiao-intermediaria": {
        "id": 1102,
        "nome": "Ji-Paraná",
        "UF": {
          "id": 11,
          "sigla": "RO",
          "nome": "Rondônia",
          "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          }
        }
      }
    }
  }
]

describe('Teste plugin Locality', () => {

  test('Testing fetch ufs', async () => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponseUf);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    window.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    const vm = new Vue({
      template: '<span></span>'
    }).$mount()

    await vm.$locality.ufs().then((obj) => {
      expect(obj).toHaveLength(27);
    })
  })

  test('Testing fetch cities', async () => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponseCities);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    window.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    const vm = new Vue({
      template: '<span></span>'
    }).$mount()

    await vm.$locality.cities(11).then((obj) => {
      expect(obj).toHaveLength(52);
    })
  })
})
