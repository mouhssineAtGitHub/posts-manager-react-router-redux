let nextId = 0;

export const ADD_POST = payload => {
  payload["type"] = "ADD_POST";
  payload["id"] = nextId++;
  return payload;
};

export const EDIT_POST = payload => ({
  type: "EDIT_POST",
  id: payload.id,
  title: payload.title,
  category: payload.category,
  post: payload.post
});

export const DELETE_POST = payload => ({
  type: "DELETE_POST",
  id: payload
});

export const actionCreator = (type, payload) => {
  return type(payload);
};
