# Hit Finder

Hit Finder is a useful website that allows for easily browsing the top songs on the Billboard Hot 100 and finding where to listen to them. It was created as a school project to practice the implementation of APIs (Billboard and musicAPI) and our experience with Materialize.
## Features

- Searching for music
- Displaying the top ten songs of the Billboard Hot 100, Global 200, ect.
- Adding songs to a personal playlist
- Linking songs to their streaming sources


## Screenshots

![Billboard](../assets/images/billboard.png)
![BillboardDropdown](../assets/images/billboard-dropdown.png)

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Acknowledgements

 - [RapidAPI](https://rapidapi.com/hub)
 - [Materialize](https://materializecss.com/)
## Authors

- [@joshuagoeke](https://github.com/joshuagoeke)
- [@medranomiler](https://github.com/medranomiler)
- [@mescamilla1114](https://github.com/mescamilla1114)
- [@Trevor-Nava](https://github.com/trevor-nava)
- [@MatthewSince97](https://github.com/MatthewSince97)



## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

