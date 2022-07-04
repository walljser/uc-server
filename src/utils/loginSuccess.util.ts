import { Request, Response } from 'express';

export function loginSuccessUtil(
  req: Request,
  res: Response,
  intended: string,
) {
  req.session.cookie.expires = null;

  if (req.accepts('html')) {
    return res.redirect(intended || '/');
  }

  return res.json({
    returnInfo: intended || '/',
  });
}
