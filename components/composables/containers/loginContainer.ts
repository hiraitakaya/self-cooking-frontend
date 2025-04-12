export const useLoginContainer = () => {
  const constants = [{ title: "メールアドレス" }, { title: "パスワード", type: "password" }];

  const attributes = {
    PostButton: {},
  };

  return {
    constants,
    attributes,
  };
};
