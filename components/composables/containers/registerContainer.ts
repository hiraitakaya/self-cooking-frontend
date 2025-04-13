export const useRegisterContainer = () => {
  const constants = [
    { title: "名前" },
    { title: "新しいメールアドレス" },
    { title: "新しいパスワード", type: "password" },
  ];

  const attributes = {
    PostButton: {},
  };

  return {
    constants,
    attributes,
  };
};
