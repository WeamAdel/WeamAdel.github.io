export function NotFoundError() {
  this.message = "The page you are trying to visit does not exist!";
  this.code = 404;
}
