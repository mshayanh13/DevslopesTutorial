//
//  VideoVC.h
//  DevslopesTutorials
//
//  Created by Mohammad Hemani on 4/17/17.
//  Copyright © 2017 Mohammad Hemani. All rights reserved.
//

#import <UIKit/UIKit.h>
@class Video;

@interface VideoVC : UIViewController <UIWebViewDelegate>
@property (nonatomic, strong) Video *video;
@end
