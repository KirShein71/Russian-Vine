export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Широкий ассортимент российских вин. Цены нормальные, есть система скидок. Можно купить некоторые вина по ценам предыдущего года. Проводят дегустации с виноделами лично или онлайн. Класс! Спасибо!",
        username: "Аноним",
        userId: "1",
        parentId: null,
        createdAt: "2023-02-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Хороший выбор русского вина, профессиональные кависты, умеренные цены. Регулярно проходят дегустации и мероприятия по популяризации российских вин",
        username: "Аноним",
        userId: "2",
        parentId: null,
        createdAt: "2023-02-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Спасибо за отзыв!",
        username: "Русское вино",
        userId: "2",
        parentId: "1",
        createdAt: "2023-02-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Рады, что вам понравилось",
        username: "Русское вино",
        userId: "2",
        parentId: "2",
        createdAt: "2023-02-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Аноним",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };