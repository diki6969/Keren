{ pkgs }: {
	deps = [
		pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
        pkgs.git
        pkgs.bash
        pkgs.ffmpeg
        pkgs.libwebp
        pkgs.imagemagick
	];
}