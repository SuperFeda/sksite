export interface IService {
    /*
      name: название проекта
      description: описание услуги
      img: ссылка на иконку
      url: ссылка на страницу услуги на сайте
      price: цена услуги
      nprice: является ли ценник не статическим
      pay_url: ссылка на оплату
    */
    name: string
    description: string
    price: string
    nprice: boolean
    img: string
    url: string
    pay_url: string
}

export interface IProject {
    /*
      name: название проекта
      description: краткое описание проекта
      img: ссылка на иконку
      url: ссылка на страницу проекта на сайте
    */
    name: string
    description: string
    img: string
    url: string
}