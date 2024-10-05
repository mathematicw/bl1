import os
import json
from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs

class CustomHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/save-message':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            form_data = json.loads(post_data.decode('utf-8'))

            # Create 'messages' directory if it doesn't exist
            if not os.path.exists('messages'):
                os.makedirs('messages')

            # Save the message to a file
            filename = f"message_{form_data['timestamp'].replace(':', '-')}.json"
            file_path = os.path.join('messages', filename)
            with open(file_path, 'w') as f:
                json.dump(form_data, f, indent=2)

            self.send_response(200)
            self.end_headers()
            self.wfile.write(b'Message saved successfully')
        else:
            super().do_POST()

    def do_GET(self):
        super().do_GET()

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, CustomHandler)
    print(f'Server running on port {port}')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
