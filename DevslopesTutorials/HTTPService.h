//
//  HTTPService.h
//  DevslopesTutorials
//
//  Created by Mohammad Hemani on 4/6/17.
//  Copyright © 2017 Mohammad Hemani. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void(^onComplete)(NSDictionary *__nullable dataDict, NSString *__nullable errMessage);

@interface HTTPService : NSObject

+(id) instance;
-(void) getTutorials:(nullable onComplete)completionHandler;
@end
