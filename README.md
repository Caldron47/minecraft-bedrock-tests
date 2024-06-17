# minecraft-bedrock-tests
<pre>
Nama : Muhammad Andra Fadhillah 
NIM  : 2110817310013
MK   : PPKPL
</pre> 
Letakkan semua file di repository ini di dalam sebuah folder baru di directory data Minecraft. Contohnya pada Android, letakkan di ```Android/data/com.mojang.minecraftpe/files/games/com.mojang/behavior_packs/New_Folder/```

Buat world baru atau buka setting world yang sudah ada. Disarankan menggunakan world tipe Flat, gamemode Creative, dan matikan mob spawning di world setting atau dengan menjalankan command ```/gamerule domobspawning false```

Aktifkan Experimental **Script API** dan tambahkan behavior pack Starter Tests. Gunakan command ```/gametest runset suite:all``` untuk menjalankan semua test, ```/gametest runset <ModuleName>``` untuk menjalankan test module tertentu, atau ```/gametest run <ModuleName:test_name>``` untuk menjalankan test case individual.
