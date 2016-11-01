import {MediaVideo} from "./media-video";
/**
 * Custom data type for tweet item
 */
export class TweetItem{
    constructor(
        public accountName: string,
        public displayAvatar: string,
        public displayName: string,
        public displayScreenName: string,
        public isRetweeted: boolean,
        public tweetText: string,
        public mediaImages: string[],
        public mediaVideos: MediaVideo[],
        public retweetCount: number,
        public favoriteCount: number
    ){

    }
}