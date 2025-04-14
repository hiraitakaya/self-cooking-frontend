export const useRegisterContainer = () => {
  const name = ref("");
  const email = ref("");
  const password = ref("");

  const constants = [
    { title: "名前", model: name },
    { title: "新しいメールアドレス", model: email },
    { title: "新しいパスワード", type: "password", model: password },
  ];

  const register = async () => {
    try {
      const response = await $fetch("http://localhost:8001/api/register", {
        method: "POST",
        body: {
          name: name.value,
          email: email.value,
          password: password.value,
        },
      });
      console.log("登録成功:", response);
    } catch (error: any) {
      console.error("登録失敗:", error?.response?._data ?? error);
    }
  };

  return {
    constants,
    register,
  };
};
