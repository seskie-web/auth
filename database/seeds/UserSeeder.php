<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'seskie';
        $user->email = 'seskie007@gmail.com';
        $user->password = bcrypt('root');
        $user->save();
    }
}
