export const useLoginContainer = () => {
  const email = ref("");
  const password = ref("");

  const constants = [
    { title: "メールアドレス", model: email },
    { title: "パスワード", type: "password", model: password },
  ];

  const login = async () => {
    try {
      const response = await $fetch("http://localhost:8001/api/login", {
        method: "POST",
        body: {
          email: email.value,
          password: password.value,
        },
      });
      console.log("ログイン成功:", response);
    } catch (error: any) {
      console.error("ログイン失敗:", error?.response?._data ?? error);
    }
  };

  return {
    constants,
    login,
  };
};
