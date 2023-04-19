//
//  CustomMethods.swift
//  RNSwiftARKit
//
//  Created by Akhzar Nazir on 18/04/2023.
//

import Foundation

@objc(CustomMethods) class CustomMethods: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  @objc public func simpleMethod() { /* do something */ }
  
  @objc public func simpleMethodReturns(
    _ callback: RCTResponseSenderBlock
  ) {
    callback(["In The name of Allah"])
//    ContentView()
  }
 
  @objc public func simpleMethodWithParams(
    _ param: String,
    callback: RCTResponseSenderBlock
  ) {
    callback(["What Params you send From React Native to ('\(param)')"])
  }
 
//  @objc public func throwError() throws {
//    throw createError(message: "CustomMethods.throwError()")
//  }
  
  @objc public func resolvePromise(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    resolve("CustomMethods.resolvePromise()")
  }
  @objc public func rejectPromise(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    reject("0", "CustomMethods.rejectPromise()", nil)
  }
}
