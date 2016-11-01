import { Injectable } from '@angular/core';

@Injectable()
export class TwitterService {

  constructor() { }

  getTwitterData(count: number, screenName: string){

    return [
        {
            "created_at": "Sat Oct 29 17:47:04 +0000 2016",
            "id": 792422515133907000,
            "id_str": "792422515133906945",
            "text": "RT @AAPInNewsGJ: Police detained @AamAadmiParty volunteers in gujarat. https://t.co/bVwGqdmto3",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "AAPInNewsGJ",
                        "name": "AAP Gujarat In News",
                        "id": 3734780172,
                        "id_str": "3734780172",
                        "indices": [
                            3,
                            15
                        ]
                    },
                    {
                        "screen_name": "AamAadmiParty",
                        "name": "AAP",
                        "id": 711694309,
                        "id_str": "711694309",
                        "indices": [
                            33,
                            47
                        ]
                    }
                ],
                "urls": [],
                "media": [
                    {
                        "id": 792371020124618800,
                        "id_str": "792371020124618753",
                        "indices": [
                            71,
                            94
                        ],
                        "media_url": "http://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                        "url": "https://t.co/bVwGqdmto3",
                        "display_url": "pic.twitter.com/bVwGqdmto3",
                        "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1024,
                                "h": 154,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 102,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1024,
                                "h": 154,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 792371056615055400,
                        "source_status_id_str": "792371056615055360",
                        "source_user_id": 3734780172,
                        "source_user_id_str": "3734780172"
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 792371020124618800,
                        "id_str": "792371020124618753",
                        "indices": [
                            71,
                            94
                        ],
                        "media_url": "http://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                        "url": "https://t.co/bVwGqdmto3",
                        "display_url": "pic.twitter.com/bVwGqdmto3",
                        "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1024,
                                "h": 154,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 102,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1024,
                                "h": 154,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 792371056615055400,
                        "source_status_id_str": "792371056615055360",
                        "source_user_id": 3734780172,
                        "source_user_id_str": "3734780172"
                    },
                    {
                        "id": 792371029083586600,
                        "id_str": "792371029083586560",
                        "indices": [
                            71,
                            94
                        ],
                        "media_url": "http://pbs.twimg.com/media/Cv8RQLbWgAAab8H.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/Cv8RQLbWgAAab8H.jpg",
                        "url": "https://t.co/bVwGqdmto3",
                        "display_url": "pic.twitter.com/bVwGqdmto3",
                        "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 964,
                                "h": 193,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 136,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 964,
                                "h": 193,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 792371056615055400,
                        "source_status_id_str": "792371056615055360",
                        "source_user_id": 3734780172,
                        "source_user_id_str": "3734780172"
                    },
                    {
                        "id": 792371035916165100,
                        "id_str": "792371035916165120",
                        "indices": [
                            71,
                            94
                        ],
                        "media_url": "http://pbs.twimg.com/media/Cv8RQk4XYAAMrPg.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/Cv8RQk4XYAAMrPg.jpg",
                        "url": "https://t.co/bVwGqdmto3",
                        "display_url": "pic.twitter.com/bVwGqdmto3",
                        "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 680,
                                "h": 90,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1024,
                                "h": 135,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 135,
                                "h": 135,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 1024,
                                "h": 135,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 792371056615055400,
                        "source_status_id_str": "792371056615055360",
                        "source_user_id": 3734780172,
                        "source_user_id_str": "3734780172"
                    },
                    {
                        "id": 792371051544059900,
                        "id_str": "792371051544059904",
                        "indices": [
                            71,
                            94
                        ],
                        "media_url": "http://pbs.twimg.com/media/Cv8RRfGWIAA0na8.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/Cv8RRfGWIAA0na8.jpg",
                        "url": "https://t.co/bVwGqdmto3",
                        "display_url": "pic.twitter.com/bVwGqdmto3",
                        "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 680,
                                "h": 114,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1024,
                                "h": 172,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1024,
                                "h": 172,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 792371056615055400,
                        "source_status_id_str": "792371056615055360",
                        "source_user_id": 3734780172,
                        "source_user_id_str": "3734780172"
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 14:22:36 +0000 2016",
                "id": 792371056615055400,
                "id_str": "792371056615055360",
                "text": "Police detained @AamAadmiParty volunteers in gujarat. https://t.co/bVwGqdmto3",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [
                        {
                            "screen_name": "AamAadmiParty",
                            "name": "AAP",
                            "id": 711694309,
                            "id_str": "711694309",
                            "indices": [
                                16,
                                30
                            ]
                        }
                    ],
                    "urls": [],
                    "media": [
                        {
                            "id": 792371020124618800,
                            "id_str": "792371020124618753",
                            "indices": [
                                54,
                                77
                            ],
                            "media_url": "http://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                            "url": "https://t.co/bVwGqdmto3",
                            "display_url": "pic.twitter.com/bVwGqdmto3",
                            "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                            "type": "photo",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1024,
                                    "h": 154,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 680,
                                    "h": 102,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 154,
                                    "resize": "fit"
                                }
                            }
                        }
                    ]
                },
                "extended_entities": {
                    "media": [
                        {
                            "id": 792371020124618800,
                            "id_str": "792371020124618753",
                            "indices": [
                                54,
                                77
                            ],
                            "media_url": "http://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/Cv8RPqDXgAEE-mT.jpg",
                            "url": "https://t.co/bVwGqdmto3",
                            "display_url": "pic.twitter.com/bVwGqdmto3",
                            "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                            "type": "photo",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1024,
                                    "h": 154,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 680,
                                    "h": 102,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 154,
                                    "resize": "fit"
                                }
                            }
                        },
                        {
                            "id": 792371029083586600,
                            "id_str": "792371029083586560",
                            "indices": [
                                54,
                                77
                            ],
                            "media_url": "http://pbs.twimg.com/media/Cv8RQLbWgAAab8H.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/Cv8RQLbWgAAab8H.jpg",
                            "url": "https://t.co/bVwGqdmto3",
                            "display_url": "pic.twitter.com/bVwGqdmto3",
                            "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                            "type": "photo",
                            "sizes": {
                                "large": {
                                    "w": 964,
                                    "h": 193,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 680,
                                    "h": 136,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 964,
                                    "h": 193,
                                    "resize": "fit"
                                }
                            }
                        },
                        {
                            "id": 792371035916165100,
                            "id_str": "792371035916165120",
                            "indices": [
                                54,
                                77
                            ],
                            "media_url": "http://pbs.twimg.com/media/Cv8RQk4XYAAMrPg.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/Cv8RQk4XYAAMrPg.jpg",
                            "url": "https://t.co/bVwGqdmto3",
                            "display_url": "pic.twitter.com/bVwGqdmto3",
                            "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 90,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 1024,
                                    "h": 135,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 135,
                                    "h": 135,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 135,
                                    "resize": "fit"
                                }
                            }
                        },
                        {
                            "id": 792371051544059900,
                            "id_str": "792371051544059904",
                            "indices": [
                                54,
                                77
                            ],
                            "media_url": "http://pbs.twimg.com/media/Cv8RRfGWIAA0na8.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/Cv8RRfGWIAA0na8.jpg",
                            "url": "https://t.co/bVwGqdmto3",
                            "display_url": "pic.twitter.com/bVwGqdmto3",
                            "expanded_url": "https://twitter.com/AAPInNewsGJ/status/792371056615055360/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 114,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 172,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1024,
                                    "h": 172,
                                    "resize": "fit"
                                }
                            }
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3734780172,
                    "id_str": "3734780172",
                    "name": "AAP Gujarat In News",
                    "screen_name": "AAPInNewsGJ",
                    "location": "Gujarat, India",
                    "description": "Follow us for updates regarding AAP Gujarat activities.\nFB : https://t.co/PeA2JgqCzq",
                    "url": "https://t.co/RH0Gh80Dju",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/RH0Gh80Dju",
                                    "expanded_url": "http://www.aapgujarat.in",
                                    "display_url": "aapgujarat.in",
                                    "indices": [
                                        0,
                                        23
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": [
                                {
                                    "url": "https://t.co/PeA2JgqCzq",
                                    "expanded_url": "http://facebook.com/AAPGujaratNews",
                                    "display_url": "facebook.com/AAPGujaratNews",
                                    "indices": [
                                        61,
                                        84
                                    ]
                                }
                            ]
                        }
                    },
                    "protected": false,
                    "followers_count": 1999,
                    "friends_count": 20,
                    "listed_count": 12,
                    "created_at": "Wed Sep 30 08:20:54 +0000 2015",
                    "favourites_count": 161,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 1102,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/749626851035869184/lX_eV9PM_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/749626851035869184/lX_eV9PM_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3734780172/1467560040",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 170,
                "favorite_count": 115,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            },
            "is_quote_status": false,
            "retweet_count": 170,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "en"
        },
        {
            "created_at": "Sat Oct 29 17:46:27 +0000 2016",
            "id": 792422360582266900,
            "id_str": "792422360582266881",
            "text": "RT @bodhrajbhardwa1: अहमदाबाद में काली चौदस पर जर्नल डायर के नाम का दिया चौराहे पर रखने से पहले ही पुलिस ने आप कार्यकर्ताओ को गिरफ़्तार कर…",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "bodhrajbhardwa1",
                        "name": "Bodhraj Bhardwaj🇮🇳",
                        "id": 3150149857,
                        "id_str": "3150149857",
                        "indices": [
                            3,
                            19
                        ]
                    }
                ],
                "urls": []
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 14:03:13 +0000 2016",
                "id": 792366182162653200,
                "id_str": "792366182162653185",
                "text": "अहमदाबाद में काली चौदस पर जर्नल डायर के नाम का दिया चौराहे पर रखने से पहले ही पुलिस ने आप कार्यकर्ताओ को गिरफ़्तार… https://t.co/Lq9v1F1jC2",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/Lq9v1F1jC2",
                            "expanded_url": "https://twitter.com/i/web/status/792366182162653185",
                            "display_url": "twitter.com/i/web/status/7…",
                            "indices": [
                                116,
                                139
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3150149857,
                    "id_str": "3150149857",
                    "name": "Bodhraj Bhardwaj🇮🇳",
                    "screen_name": "bodhrajbhardwa1",
                    "location": "New Delhi, Delhi",
                    "description": "भ्र्ष्टाचारमुक्त भारत बनाने में योगदान देना चाहता हूँ फिर चाहे जान ही देनी पड़े । प्रभारी दक्षिण गुजरात आम आदमी पार्टी",
                    "url": "https://t.co/bBwAPFKjTI",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/bBwAPFKjTI",
                                    "expanded_url": "https://m.facebook.com/Bodhraj-Bhardwaj-358350427675877/",
                                    "display_url": "m.facebook.com/Bodhraj-Bhardw…",
                                    "indices": [
                                        0,
                                        23
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1716,
                    "friends_count": 214,
                    "listed_count": 13,
                    "created_at": "Sat Apr 11 16:31:52 +0000 2015",
                    "favourites_count": 4917,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 13533,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/777358548736942080/njJ_tOOt_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/777358548736942080/njJ_tOOt_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3150149857/1472713870",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": {
                    "id": "317fcc4b21a604d5",
                    "url": "https://api.twitter.com/1.1/geo/id/317fcc4b21a604d5.json",
                    "place_type": "city",
                    "name": "New Delhi",
                    "full_name": "New Delhi, India",
                    "country_code": "IN",
                    "country": "India",
                    "contained_within": [],
                    "bounding_box": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    76.84252,
                                    28.397657
                                ],
                                [
                                    77.347652,
                                    28.397657
                                ],
                                [
                                    77.347652,
                                    28.879322
                                ],
                                [
                                    76.84252,
                                    28.879322
                                ]
                            ]
                        ]
                    },
                    "attributes": {}
                },
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 278,
                "favorite_count": 238,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "hi"
            },
            "is_quote_status": false,
            "retweet_count": 278,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "hi"
        },
        {
            "created_at": "Sat Oct 29 14:30:11 +0000 2016",
            "id": 792372968521216000,
            "id_str": "792372968521216001",
            "text": "RT @HasanSafin: .@AAPGujarat जनरल डायर का कंकास दूर करने के लिए दिए रखना चाहता था,'ऊपर से ऑर्डर' की वजह से कार्यक्रम से पहले ही किया गिरफ़्…",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "HasanSafin",
                        "name": "Dr. Safin સફીન",
                        "id": 2277383275,
                        "id_str": "2277383275",
                        "indices": [
                            3,
                            14
                        ]
                    },
                    {
                        "screen_name": "AAPGujarat",
                        "name": "AAP Gujarat",
                        "id": 1130846983,
                        "id_str": "1130846983",
                        "indices": [
                            17,
                            28
                        ]
                    }
                ],
                "urls": []
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 14:12:11 +0000 2016",
                "id": 792368435883675600,
                "id_str": "792368435883675648",
                "text": ".@AAPGujarat जनरल डायर का कंकास दूर करने के लिए दिए रखना चाहता था,'ऊपर से ऑर्डर' की वजह से कार्यक्रम से पहले ही कि… https://t.co/5E6BoUwBNA",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [
                        {
                            "screen_name": "AAPGujarat",
                            "name": "AAP Gujarat",
                            "id": 1130846983,
                            "id_str": "1130846983",
                            "indices": [
                                1,
                                12
                            ]
                        }
                    ],
                    "urls": [
                        {
                            "url": "https://t.co/5E6BoUwBNA",
                            "expanded_url": "https://twitter.com/i/web/status/792368435883675648",
                            "display_url": "twitter.com/i/web/status/7…",
                            "indices": [
                                116,
                                139
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2277383275,
                    "id_str": "2277383275",
                    "name": "Dr. Safin સફીન",
                    "screen_name": "HasanSafin",
                    "location": "Ahmedabad,Gujarat",
                    "description": "आम आदमी | स्वघोषित क्रांतिकारी | ये देश बदलेगा | Dental Surgeon | Indian | Gujarati",
                    "url": "https://t.co/RH0Gh7J1UU",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/RH0Gh7J1UU",
                                    "expanded_url": "http://www.aapgujarat.in",
                                    "display_url": "aapgujarat.in",
                                    "indices": [
                                        0,
                                        23
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6532,
                    "friends_count": 976,
                    "listed_count": 80,
                    "created_at": "Sun Jan 05 09:24:00 +0000 2014",
                    "favourites_count": 82687,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 197940,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/792411304635936768/A2cCEv2m_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/792411304635936768/A2cCEv2m_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2277383275/1467286798",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 337,
                "favorite_count": 279,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "hi"
            },
            "is_quote_status": false,
            "retweet_count": 337,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "hi"
        },
        {
            "created_at": "Sat Oct 29 13:34:44 +0000 2016",
            "id": 792359011181998100,
            "id_str": "792359011181998081",
            "text": "RT @sardesairajdeep: Looks like surge/flexi pricing not working. Aam Commuter takes the hit? https://t.co/hwWv5ajO4e",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "sardesairajdeep",
                        "name": "Rajdeep Sardesai",
                        "id": 56304605,
                        "id_str": "56304605",
                        "indices": [
                            3,
                            19
                        ]
                    }
                ],
                "urls": [
                    {
                        "url": "https://t.co/hwWv5ajO4e",
                        "expanded_url": "http://www.hindustantimes.com/punjab/berths-vacant-yet-people-paying-up-to-50-more-for-shatabdi-seat/story-4bC5Aa89qa64h4gVjlp78L.html",
                        "display_url": "hindustantimes.com/punjab/berths-…",
                        "indices": [
                            93,
                            116
                        ]
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 13:34:12 +0000 2016",
                "id": 792358877778042900,
                "id_str": "792358877778042880",
                "text": "Looks like surge/flexi pricing not working. Aam Commuter takes the hit? https://t.co/hwWv5ajO4e",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/hwWv5ajO4e",
                            "expanded_url": "http://www.hindustantimes.com/punjab/berths-vacant-yet-people-paying-up-to-50-more-for-shatabdi-seat/story-4bC5Aa89qa64h4gVjlp78L.html",
                            "display_url": "hindustantimes.com/punjab/berths-…",
                            "indices": [
                                72,
                                95
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 56304605,
                    "id_str": "56304605",
                    "name": "Rajdeep Sardesai",
                    "screen_name": "sardesairajdeep",
                    "location": "New Delhi",
                    "description": "father first.Journalist, anchor, author: 2014: The Election That Changed India. mail: rajdeepsardesai52@gmail.com. blog at https://t.co/L2nINGl0kb",
                    "url": "https://t.co/sFszrV4NFL",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/sFszrV4NFL",
                                    "expanded_url": "http://rajdeepsardesai.net/",
                                    "display_url": "rajdeepsardesai.net",
                                    "indices": [
                                        0,
                                        23
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": [
                                {
                                    "url": "https://t.co/L2nINGl0kb",
                                    "expanded_url": "http://rajdeepsardesai.net",
                                    "display_url": "rajdeepsardesai.net",
                                    "indices": [
                                        123,
                                        146
                                    ]
                                }
                            ]
                        }
                    },
                    "protected": false,
                    "followers_count": 4860708,
                    "friends_count": 482,
                    "listed_count": 8829,
                    "created_at": "Mon Jul 13 06:14:44 +0000 2009",
                    "favourites_count": 234,
                    "utc_offset": 19800,
                    "time_zone": "New Delhi",
                    "geo_enabled": true,
                    "verified": true,
                    "statuses_count": 43432,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/782395518928519170/hIhu3Oi__normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/782395518928519170/hIhu3Oi__normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/56304605/1477655615",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 552,
                "favorite_count": 443,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            },
            "is_quote_status": false,
            "retweet_count": 552,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "en"
        },
        {
            "created_at": "Sat Oct 29 13:33:35 +0000 2016",
            "id": 792358724178370600,
            "id_str": "792358724178370560",
            "text": "RT @AbhinavAAP: A supporter made this.\n\nDo watch!! https://t.co/6wTRd2ykGD",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "AbhinavAAP",
                        "name": "Abhinav AAP 🇮🇳",
                        "id": 2364354846,
                        "id_str": "2364354846",
                        "indices": [
                            3,
                            14
                        ]
                    }
                ],
                "urls": [],
                "media": [
                    {
                        "id": 792341767173513200,
                        "id_str": "792341767173513216",
                        "indices": [
                            51,
                            74
                        ],
                        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                        "url": "https://t.co/6wTRd2ykGD",
                        "display_url": "pic.twitter.com/6wTRd2ykGD",
                        "expanded_url": "https://twitter.com/AbhinavAAP/status/792346556200464384/video/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 338,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 191,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1024,
                                "h": 576,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 792346556200464400,
                        "source_status_id_str": "792346556200464384",
                        "source_user_id": 2364354846,
                        "source_user_id_str": "2364354846"
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 792341767173513200,
                        "id_str": "792341767173513216",
                        "indices": [
                            51,
                            74
                        ],
                        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                        "url": "https://t.co/6wTRd2ykGD",
                        "display_url": "pic.twitter.com/6wTRd2ykGD",
                        "expanded_url": "https://twitter.com/AbhinavAAP/status/792346556200464384/video/1",
                        "type": "video",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 338,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 191,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1024,
                                "h": 576,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 792346556200464400,
                        "source_status_id_str": "792346556200464384",
                        "source_user_id": 2364354846,
                        "source_user_id_str": "2364354846",
                        "video_info": {
                            "aspect_ratio": [
                                16,
                                9
                            ],
                            "duration_millis": 114000,
                            "variants": [
                                {
                                    "content_type": "application/dash+xml",
                                    "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/pl/SmkvzJALWodEph7F.mpd"
                                },
                                {
                                    "bitrate": 832000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/vid/640x360/5ZCa2VhoVyAr_IM3.mp4"
                                },
                                {
                                    "bitrate": 2176000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/vid/1280x720/7hjatUuw-ejN9i33.mp4"
                                },
                                {
                                    "content_type": "application/x-mpegURL",
                                    "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/pl/SmkvzJALWodEph7F.m3u8"
                                },
                                {
                                    "bitrate": 320000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/vid/320x180/Ymi6IH0bcds9wJGv.mp4"
                                }
                            ]
                        },
                        "additional_media_info": {
                            "monetizable": false,
                            "source_user": {
                                "id": 2364354846,
                                "id_str": "2364354846",
                                "name": "Abhinav AAP 🇮🇳",
                                "screen_name": "AbhinavAAP",
                                "location": "",
                                "description": "AAP Social Media Team Leader || Find what you love and let it kill you || RTs are not endorsement",
                                "url": "https://t.co/9mckBoQFwN",
                                "entities": {
                                    "url": {
                                        "urls": [
                                            {
                                                "url": "https://t.co/9mckBoQFwN",
                                                "expanded_url": "http://aamaadmiparty.org/announcement-of-NCT-and-jt-secretary-for-delhi-state",
                                                "display_url": "aamaadmiparty.org/announcement-o…",
                                                "indices": [
                                                    0,
                                                    23
                                                ]
                                            }
                                        ]
                                    },
                                    "description": {
                                        "urls": []
                                    }
                                },
                                "protected": false,
                                "followers_count": 16314,
                                "friends_count": 541,
                                "listed_count": 57,
                                "created_at": "Thu Feb 27 15:54:16 +0000 2014",
                                "favourites_count": 386,
                                "utc_offset": 19800,
                                "time_zone": "New Delhi",
                                "geo_enabled": true,
                                "verified": true,
                                "statuses_count": 4977,
                                "lang": "en",
                                "contributors_enabled": false,
                                "is_translator": false,
                                "is_translation_enabled": false,
                                "profile_background_color": "C0DEED",
                                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                                "profile_background_tile": false,
                                "profile_image_url": "http://pbs.twimg.com/profile_images/781453159428345856/JOnxnT9G_normal.jpg",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/781453159428345856/JOnxnT9G_normal.jpg",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/2364354846/1467666412",
                                "profile_link_color": "0084B4",
                                "profile_sidebar_border_color": "C0DEED",
                                "profile_sidebar_fill_color": "DDEEF6",
                                "profile_text_color": "333333",
                                "profile_use_background_image": true,
                                "has_extended_profile": true,
                                "default_profile": true,
                                "default_profile_image": false,
                                "following": null,
                                "follow_request_sent": null,
                                "notifications": null,
                                "translator_type": "none"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 12:45:14 +0000 2016",
                "id": 792346556200464400,
                "id_str": "792346556200464384",
                "text": "A supporter made this.\n\nDo watch!! https://t.co/6wTRd2ykGD",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [],
                    "media": [
                        {
                            "id": 792341767173513200,
                            "id_str": "792341767173513216",
                            "indices": [
                                35,
                                58
                            ],
                            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                            "url": "https://t.co/6wTRd2ykGD",
                            "display_url": "pic.twitter.com/6wTRd2ykGD",
                            "expanded_url": "https://twitter.com/AbhinavAAP/status/792346556200464384/video/1",
                            "type": "photo",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 338,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 191,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 576,
                                    "resize": "fit"
                                }
                            }
                        }
                    ]
                },
                "extended_entities": {
                    "media": [
                        {
                            "id": 792341767173513200,
                            "id_str": "792341767173513216",
                            "indices": [
                                35,
                                58
                            ],
                            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/792341767173513216/pu/img/mNldlG-TjdgrWy6z.jpg",
                            "url": "https://t.co/6wTRd2ykGD",
                            "display_url": "pic.twitter.com/6wTRd2ykGD",
                            "expanded_url": "https://twitter.com/AbhinavAAP/status/792346556200464384/video/1",
                            "type": "video",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 338,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 191,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 576,
                                    "resize": "fit"
                                }
                            },
                            "video_info": {
                                "aspect_ratio": [
                                    16,
                                    9
                                ],
                                "duration_millis": 114000,
                                "variants": [
                                    {
                                        "content_type": "application/dash+xml",
                                        "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/pl/SmkvzJALWodEph7F.mpd"
                                    },
                                    {
                                        "bitrate": 832000,
                                        "content_type": "video/mp4",
                                        "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/vid/640x360/5ZCa2VhoVyAr_IM3.mp4"
                                    },
                                    {
                                        "bitrate": 2176000,
                                        "content_type": "video/mp4",
                                        "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/vid/1280x720/7hjatUuw-ejN9i33.mp4"
                                    },
                                    {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/pl/SmkvzJALWodEph7F.m3u8"
                                    },
                                    {
                                        "bitrate": 320000,
                                        "content_type": "video/mp4",
                                        "url": "https://video.twimg.com/ext_tw_video/792341767173513216/pu/vid/320x180/Ymi6IH0bcds9wJGv.mp4"
                                    }
                                ]
                            },
                            "additional_media_info": {
                                "monetizable": false
                            }
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2364354846,
                    "id_str": "2364354846",
                    "name": "Abhinav AAP 🇮🇳",
                    "screen_name": "AbhinavAAP",
                    "location": "",
                    "description": "AAP Social Media Team Leader || Find what you love and let it kill you || RTs are not endorsement",
                    "url": "https://t.co/9mckBoQFwN",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/9mckBoQFwN",
                                    "expanded_url": "http://aamaadmiparty.org/announcement-of-NCT-and-jt-secretary-for-delhi-state",
                                    "display_url": "aamaadmiparty.org/announcement-o…",
                                    "indices": [
                                        0,
                                        23
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 16314,
                    "friends_count": 541,
                    "listed_count": 57,
                    "created_at": "Thu Feb 27 15:54:16 +0000 2014",
                    "favourites_count": 386,
                    "utc_offset": 19800,
                    "time_zone": "New Delhi",
                    "geo_enabled": true,
                    "verified": true,
                    "statuses_count": 4977,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/781453159428345856/JOnxnT9G_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/781453159428345856/JOnxnT9G_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2364354846/1467666412",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 445,
                "favorite_count": 434,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            },
            "is_quote_status": false,
            "retweet_count": 445,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "en"
        },
        {
            "created_at": "Sat Oct 29 13:31:46 +0000 2016",
            "id": 792358266110025700,
            "id_str": "792358266110025729",
            "text": "Mahesh Giri's protest at Kejriwal's residence was not granted, yet no arrest made - RTI reveals The Political Funda https://t.co/MuVQ4Y4EQo",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                    {
                        "url": "https://t.co/MuVQ4Y4EQo",
                        "expanded_url": "http://thepoliticalfunda.com/News/Detail/Mahesh_Giris_protest_at_Kejriwals_residence_was_not_granted_yet_no_arrest_made_RTI_reveals20762",
                        "display_url": "thepoliticalfunda.com/News/Detail/Ma…",
                        "indices": [
                            116,
                            139
                        ]
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 670,
            "favorite_count": 527,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "en"
        },
        {
            "created_at": "Sat Oct 29 13:11:30 +0000 2016",
            "id": 792353165559472100,
            "id_str": "792353165559472128",
            "text": "https://t.co/DWoUtNnz26",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                    {
                        "url": "https://t.co/DWoUtNnz26",
                        "expanded_url": "https://shabdaankan.wordpress.com/2016/10/28/%e0%a4%b8%e0%a4%be%e0%a4%b0%e0%a5%87-%e0%a4%97%e0%a5%81%e0%a4%82%e0%a4%a1%e0%a5%87-%e0%a4%86%e0%a4%aa-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%ae%e0%a4%bf%e0%a4%b2%e0%a5%87-%e0%a4%b9%e0%a5%88/",
                        "display_url": "shabdaankan.wordpress.com/2016/10/28/%e0…",
                        "indices": [
                            0,
                            23
                        ]
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 559,
            "favorite_count": 615,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sat Oct 29 13:10:20 +0000 2016",
            "id": 792352873715687400,
            "id_str": "792352873715687425",
            "text": "RT @AapkaHarinder: गुजरात, कर्णाटक में मोहल्ला क्लिनिक खोलेंगे।\nपर दिल्ली में केजरीवाल को नही खोलने देंगे। @ArvindKejriwal @dilipkpandey @P…",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "AapkaHarinder",
                        "name": "Harinder Singh",
                        "id": 1412600016,
                        "id_str": "1412600016",
                        "indices": [
                            3,
                            17
                        ]
                    },
                    {
                        "screen_name": "ArvindKejriwal",
                        "name": "Arvind Kejriwal",
                        "id": 405427035,
                        "id_str": "405427035",
                        "indices": [
                            107,
                            122
                        ]
                    },
                    {
                        "screen_name": "dilipkpandey",
                        "name": "Dilip K. Pandey",
                        "id": 16967612,
                        "id_str": "16967612",
                        "indices": [
                            123,
                            136
                        ]
                    }
                ],
                "urls": []
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 11:20:43 +0000 2016",
                "id": 792325286792605700,
                "id_str": "792325286792605696",
                "text": "गुजरात, कर्णाटक में मोहल्ला क्लिनिक खोलेंगे।\nपर दिल्ली में केजरीवाल को नही खोलने देंगे। @ArvindKejriwal… https://t.co/GkEw8KVS1B",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [
                        {
                            "screen_name": "ArvindKejriwal",
                            "name": "Arvind Kejriwal",
                            "id": 405427035,
                            "id_str": "405427035",
                            "indices": [
                                88,
                                103
                            ]
                        }
                    ],
                    "urls": [
                        {
                            "url": "https://t.co/GkEw8KVS1B",
                            "expanded_url": "https://twitter.com/i/web/status/792325286792605696",
                            "display_url": "twitter.com/i/web/status/7…",
                            "indices": [
                                105,
                                128
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1412600016,
                    "id_str": "1412600016",
                    "name": "Harinder Singh",
                    "screen_name": "AapkaHarinder",
                    "location": "",
                    "description": "Frontal Coordinator (Aam Aadmi Party Delhi State)",
                    "url": "http://t.co/HkGu3u03s4",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/HkGu3u03s4",
                                    "expanded_url": "http://hpinfotek.com",
                                    "display_url": "hpinfotek.com",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 373,
                    "friends_count": 137,
                    "listed_count": 2,
                    "created_at": "Wed May 08 11:28:16 +0000 2013",
                    "favourites_count": 69,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 1182,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/601407608746971136/gumRtEC8_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/601407608746971136/gumRtEC8_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1412600016/1409778575",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 380,
                "favorite_count": 317,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "hi"
            },
            "is_quote_status": false,
            "retweet_count": 380,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "hi"
        },
        {
            "created_at": "Sat Oct 29 13:10:08 +0000 2016",
            "id": 792352821584670700,
            "id_str": "792352821584670720",
            "text": "RT @Amitjanhit: आखिर यैसा कर के BJPऔर मोदी जी को क्या मिलेगा.? DCW अच्छा काम कर रही है उसको प्रोत्साहन देने की जगह उनकी सेलरी रोकना, यह शर्…",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "Amitjanhit",
                        "name": "Amit Mishra",
                        "id": 101152134,
                        "id_str": "101152134",
                        "indices": [
                            3,
                            14
                        ]
                    }
                ],
                "urls": []
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 07:57:37 +0000 2016",
                "id": 792274172273692700,
                "id_str": "792274172273692672",
                "text": "आखिर यैसा कर के BJPऔर मोदी जी को क्या मिलेगा.? DCW अच्छा काम कर रही है उसको प्रोत्साहन देने की जगह उनकी सेलरी रोकना… https://t.co/l15rcMxO2B",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/l15rcMxO2B",
                            "expanded_url": "https://twitter.com/i/web/status/792274172273692672",
                            "display_url": "twitter.com/i/web/status/7…",
                            "indices": [
                                117,
                                140
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 101152134,
                    "id_str": "101152134",
                    "name": "Amit Mishra",
                    "screen_name": "Amitjanhit",
                    "location": "New Delhi",
                    "description": "Joined Arvind Kejriwal as RTI activist in 2008. Lead India Against Corruption communication team. Now I head AAP Citizen Interaction Team.",
                    "url": "https://t.co/YaJWJgYLG2",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/YaJWJgYLG2",
                                    "expanded_url": "http://aamaadmiparty.org",
                                    "display_url": "aamaadmiparty.org",
                                    "indices": [
                                        0,
                                        23
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 8493,
                    "friends_count": 392,
                    "listed_count": 26,
                    "created_at": "Sat Jan 02 06:04:03 +0000 2010",
                    "favourites_count": 1356,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 12166,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "ACDED6",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/800845426/234538d211c3398d062d06fcbe4cd08c.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/800845426/234538d211c3398d062d06fcbe4cd08c.jpeg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/783747845614559232/pWrfvs-D_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/783747845614559232/pWrfvs-D_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/101152134/1442078546",
                    "profile_link_color": "038543",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": true,
                "quoted_status_id": 792206826892824600,
                "quoted_status_id_str": "792206826892824579",
                "quoted_status": {
                    "created_at": "Sat Oct 29 03:30:00 +0000 2016",
                    "id": 792206826892824600,
                    "id_str": "792206826892824579",
                    "text": "DCW may be forced to shut rape crisis cell as staff salaries stopped by LG Najeeb Jung https://t.co/NtVkQbFLn0",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [
                            {
                                "url": "https://t.co/NtVkQbFLn0",
                                "expanded_url": "http://www.jantakareporter.com/india/rape-crisis-cell-staff-salaries/71823/",
                                "display_url": "jantakareporter.com/india/rape-cri…",
                                "indices": [
                                    87,
                                    110
                                ]
                            }
                        ]
                    },
                    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 3006989562,
                        "id_str": "3006989562",
                        "name": "Janta Ka Reporter",
                        "screen_name": "JantaKaReporter",
                        "location": "",
                        "description": "Media revolution in India has begun! With your support Janta Ka Reporter has now become a reality.\nSend your write ups to ireport@jantakareporter.com",
                        "url": "https://t.co/jjvGfOrpyD",
                        "entities": {
                            "url": {
                                "urls": [
                                    {
                                        "url": "https://t.co/jjvGfOrpyD",
                                        "expanded_url": "http://www.jantakareporter.in/",
                                        "display_url": "jantakareporter.in",
                                        "indices": [
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 55834,
                        "friends_count": 343,
                        "listed_count": 207,
                        "created_at": "Sun Feb 01 17:34:18 +0000 2015",
                        "favourites_count": 762,
                        "utc_offset": 19800,
                        "time_zone": "New Delhi",
                        "geo_enabled": true,
                        "verified": true,
                        "statuses_count": 34220,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "022330",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/592759277812518912/7ZPIEu80.png",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/592759277812518912/7ZPIEu80.png",
                        "profile_background_tile": true,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/713727955185303552/8dJrGn42_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/713727955185303552/8dJrGn42_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3006989562/1459001029",
                        "profile_link_color": "BB1919",
                        "profile_sidebar_border_color": "EEEEEE",
                        "profile_sidebar_fill_color": "F6F6F6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": null,
                        "follow_request_sent": null,
                        "notifications": null,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 41,
                    "favorite_count": 17,
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "retweet_count": 298,
                "favorite_count": 249,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "hi"
            },
            "is_quote_status": true,
            "quoted_status_id": 792206826892824600,
            "quoted_status_id_str": "792206826892824579",
            "retweet_count": 298,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "hi"
        },
        {
            "created_at": "Sat Oct 29 13:09:35 +0000 2016",
            "id": 792352682556002300,
            "id_str": "792352682556002304",
            "text": "RT @amitc17: @KirtiAzadMP @ArvindKejriwal @arunjaitley @BJP4India @BishanBedi Not sure what is this called!!\nhttps://t.co/8poHAkJ7Rc",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "amitc17",
                        "name": "Amit C",
                        "id": 35161884,
                        "id_str": "35161884",
                        "indices": [
                            3,
                            11
                        ]
                    },
                    {
                        "screen_name": "KirtiAzadMP",
                        "name": "Kirti Azad",
                        "id": 582653236,
                        "id_str": "582653236",
                        "indices": [
                            13,
                            25
                        ]
                    },
                    {
                        "screen_name": "ArvindKejriwal",
                        "name": "Arvind Kejriwal",
                        "id": 405427035,
                        "id_str": "405427035",
                        "indices": [
                            26,
                            41
                        ]
                    },
                    {
                        "screen_name": "arunjaitley",
                        "name": "Arun Jaitley",
                        "id": 2183816041,
                        "id_str": "2183816041",
                        "indices": [
                            42,
                            54
                        ]
                    },
                    {
                        "screen_name": "BJP4India",
                        "name": "BJP",
                        "id": 207809313,
                        "id_str": "207809313",
                        "indices": [
                            55,
                            65
                        ]
                    },
                    {
                        "screen_name": "BishanBedi",
                        "name": "Bishan Bedi",
                        "id": 577953106,
                        "id_str": "577953106",
                        "indices": [
                            66,
                            77
                        ]
                    }
                ],
                "urls": [
                    {
                        "url": "https://t.co/8poHAkJ7Rc",
                        "expanded_url": "https://www.pgurus.com/two-delhi-police-constables-get-punishment-transfer-for-arguing-with-the-sons-of-arun-jaitley/",
                        "display_url": "pgurus.com/two-delhi-poli…",
                        "indices": [
                            109,
                            132
                        ]
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 405427035,
                "id_str": "405427035",
                "name": "Arvind Kejriwal",
                "screen_name": "ArvindKejriwal",
                "location": "India",
                "description": "Political revolution in India has begun. Bharat jaldi badlega. Arvind Kejriwal.",
                "url": "http://t.co/KtvowWOc",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "http://t.co/KtvowWOc",
                                "expanded_url": "http://www.AamAadmiParty.org",
                                "display_url": "AamAadmiParty.org",
                                "indices": [
                                    0,
                                    20
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9493691,
                "friends_count": 158,
                "listed_count": 5160,
                "created_at": "Sat Nov 05 09:15:08 +0000 2011",
                "favourites_count": 101,
                "utc_offset": 19800,
                "time_zone": "Kolkata",
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 15180,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/2438376986/h35y4r0aw5n7tph9xcat_normal.jpeg",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
                "created_at": "Sat Oct 29 12:37:07 +0000 2016",
                "id": 792344511863140400,
                "id_str": "792344511863140352",
                "text": "@KirtiAzadMP @ArvindKejriwal @arunjaitley @BJP4India @BishanBedi Not sure what is this called!!\nhttps://t.co/8poHAkJ7Rc",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [
                        {
                            "screen_name": "KirtiAzadMP",
                            "name": "Kirti Azad",
                            "id": 582653236,
                            "id_str": "582653236",
                            "indices": [
                                0,
                                12
                            ]
                        },
                        {
                            "screen_name": "ArvindKejriwal",
                            "name": "Arvind Kejriwal",
                            "id": 405427035,
                            "id_str": "405427035",
                            "indices": [
                                13,
                                28
                            ]
                        },
                        {
                            "screen_name": "arunjaitley",
                            "name": "Arun Jaitley",
                            "id": 2183816041,
                            "id_str": "2183816041",
                            "indices": [
                                29,
                                41
                            ]
                        },
                        {
                            "screen_name": "BJP4India",
                            "name": "BJP",
                            "id": 207809313,
                            "id_str": "207809313",
                            "indices": [
                                42,
                                52
                            ]
                        },
                        {
                            "screen_name": "BishanBedi",
                            "name": "Bishan Bedi",
                            "id": 577953106,
                            "id_str": "577953106",
                            "indices": [
                                53,
                                64
                            ]
                        }
                    ],
                    "urls": [
                        {
                            "url": "https://t.co/8poHAkJ7Rc",
                            "expanded_url": "https://www.pgurus.com/two-delhi-police-constables-get-punishment-transfer-for-arguing-with-the-sons-of-arun-jaitley/",
                            "display_url": "pgurus.com/two-delhi-poli…",
                            "indices": [
                                96,
                                119
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "in_reply_to_status_id": 792333186852393000,
                "in_reply_to_status_id_str": "792333186852392960",
                "in_reply_to_user_id": 582653236,
                "in_reply_to_user_id_str": "582653236",
                "in_reply_to_screen_name": "KirtiAzadMP",
                "user": {
                    "id": 35161884,
                    "id_str": "35161884",
                    "name": "Amit C",
                    "screen_name": "amitc17",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 33,
                    "friends_count": 45,
                    "listed_count": 2,
                    "created_at": "Sat Apr 25 06:06:31 +0000 2009",
                    "favourites_count": 1925,
                    "utc_offset": 19800,
                    "time_zone": "New Delhi",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 3912,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                    "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": true,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 156,
                "favorite_count": 108,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            },
            "is_quote_status": false,
            "retweet_count": 156,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "en"
        }
    ];

  }

}
