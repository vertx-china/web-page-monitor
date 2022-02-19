import { NextRouter } from "next/router";
import { MouseEventHandler } from "react";

import { decodeProtectedHeader,decodeJwt, } from "jose";
import { KEYUTIL, jws } from "jsrsasign";

import { pub } from "@webest/web-page-monitor-helper";

export function clickGoBack(router:NextRouter){
  return (e:MouseEvent)=> {
    e.preventDefault();
    router.back();
  }
}

const pubKey = KEYUTIL.getKey(pub);

export async function getInfoFromToken(jwtToken){
  const decodedHeader = await decodeProtectedHeader(jwtToken);
  const decodedJwt = await decodeJwt(jwtToken);

  const jwtVerifyResult = jws.JWS.verifyJWT(jwtToken, pubKey, {alg: ['PS384']});
  return {
    jwtHeader: decodedHeader,
    jwt: decodedJwt,
    verified: jwtVerifyResult
  }
}