import { rest } from "msw";

const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          _id: "620ffed95302942c733bb6ef",
          name: "Bender",
          img: "https://static.wikia.nocookie.net/esfuturama/images/9/91/Bender_Bending_Rodr%C3%ADguez.png/revision/latest?cb=20130615070942",
          speed: 7,
          endurance: 6,
          creationDate: "10-03-2997",
        },
        {
          _id: "621001035302942c733bb6f1",
          name: "Kevin",
          img: "https://static.wikia.nocookie.net/final-space/images/f/f0/KvnFull.png/revision/latest?cb=20180508211103",
          speed: 8,
          endurance: 7,
          creationDate: "01-08-3207",
        },
      ])
    )
  ),
  rest.delete(`${process.env.REACT_APP_API_URL}delete/9`, (req, res, ctx) =>
    res(ctx.status(404))
  ),
  rest.delete(`${process.env.REACT_APP_API_URL}delete/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ id: 3 }))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}create`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "Tardis",
        speed: 8,
        endurance: 10,
        img: "testUrl",
        creationDate: "10-01-2000",
      })
    )
  ),
];

export default handlers;
