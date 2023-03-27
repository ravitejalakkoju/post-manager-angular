export class User{
    id: number;
    name: string;
    avatar: string;
    lastUsedOn: Date;
    totalPosts: number;
    //: { id: number, name:string, avatar: string, recent_posts: any[]}
    constructor(user: any)
    {
        this.id = user.id;
        this.name = user.name;
        this.avatar = user.avatar;
        // this.lastUsedOn = new Date(user.recent_posts.reduce((min, obj) => obj.createdAt < min ? obj.createdAt : min, user.recent_posts[0].createdAt));
        this.totalPosts = user.recent_posts?.length ?? 0;
    }
}