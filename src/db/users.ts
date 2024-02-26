import queryClient from './db';


async function getUsers() {
    try {
        const users = await queryClient`
            SELECT * FROM  public."UserProfile";
        `.execute();
        return users;
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

export { getUsers };