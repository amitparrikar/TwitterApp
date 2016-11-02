import {Component, OnInit, Input} from "@angular/core";
import {TweetItem} from "../shared/tweet-item";
import {MediaVideo} from "../shared/media-video";

@Component({
  selector: 'twt-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css']
})
export class TweetContainerComponent implements OnInit {

    @Input() tweetItem: any;
    public tweet: TweetItem;


    constructor() { }

    ngOnInit(){

        this.tweetItem = this.formatTweetItem(this.tweetItem);

    }

    formatTweetItem(data: any){

        let accountName, displayAvatar, displayName, displayScreenName, isRetweeted, tweetText, retweetCount, favoriteCount, date;
        let mediaImages: string[] = [], mediaVideos: MediaVideo[] = [];

        if(data.retweeted_status && data.retweeted_status.user){
            displayAvatar = data.retweeted_status.user.profile_image_url;
            displayName = data.retweeted_status.user.name;
            displayScreenName = data.retweeted_status.user.screen_name;
            tweetText = data.retweeted_status.text;
            isRetweeted = true;
        }else{
            displayAvatar = data.user.profile_image_url;
            displayName = data.user.name;
            displayScreenName = data.user.screen_name;
            tweetText = data.text;
            isRetweeted = false;
        }

        if(data.extended_entities && data.extended_entities.media.length > 0){
            let mediaLength = data.extended_entities.media.length;
            for(var i=0; i < mediaLength; i++ ){
                let mediaItem = data.extended_entities.media[i];
                if(mediaItem.type === 'video'){
                    for(var j = 0; j < mediaItem.video_info.variants.length; j++){
                        var videoItem = mediaItem.video_info.variants[j];
                        if(videoItem.content_type === 'video/mp4'){
                            mediaVideos.push(new MediaVideo(videoItem.url, mediaItem.media_url));
                            break;
                        }
                    }
                }
                if(mediaItem.type == 'photo'){
                    mediaImages.push(mediaItem.media_url);
                }
            }
        }

        accountName = data.user.name;
        retweetCount = data.retweet_count;
        favoriteCount = data.favorite_count;
        date = data.created_at;


        this.tweet = new TweetItem(accountName, displayAvatar, displayName, displayScreenName, isRetweeted, tweetText, mediaImages, mediaVideos, retweetCount, favoriteCount, date);

        //console.log(this.tweet);

    }



}
