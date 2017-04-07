//
//  ViewController.m
//  DevslopesTutorials
//
//  Created by Mohammad Hemani on 4/6/17.
//  Copyright © 2017 Mohammad Hemani. All rights reserved.
//

#import "ViewController.h"
#import "HTTPService.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [[HTTPService instance] getTutorials:^(NSDictionary * _Nullable dataDict, NSString * _Nullable errMessage) {
        if (dataDict) {
            NSLog(@"Dictionary %@", dataDict.debugDescription);
        } else if (errMessage) {
            //Display an alert to the user
        }
    }];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
