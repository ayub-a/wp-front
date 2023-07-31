export const isCurrPathName = (pathName: string) => {
  const location = window.location.pathname

  switch (pathName) {
    case '/':
      return location === pathName

    default:
      return location.match(/\w{1,}/)?.[0] === pathName
  }
}
