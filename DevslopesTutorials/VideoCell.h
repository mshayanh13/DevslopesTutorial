//
//  VideoCell.h
//  DevslopesTutorials
//
//  Created by Mohammad Hemani on 4/7/17.
//  Copyright © 2017 Mohammad Hemani. All rights reserved.
//

#import <UIKit/UIKit.h>
@class Video;

@interface VideoCell : UITableViewCell
-(void)updateUI:(nonnull Video*)video;
@end
