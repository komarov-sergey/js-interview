const initialUrl = "/posts/:postId/comments/:commentId";

function replaceParamsInUrl(inUrl, paramArr) {
  return paramArr
    .reduce((acc, current) => {
      return acc.replace(current.from, current.to);
    }, inUrl)
    .replaceAll(":", "");
}

module.exports = {
  initialUrl,
  replaceParamsInUrl,
};
