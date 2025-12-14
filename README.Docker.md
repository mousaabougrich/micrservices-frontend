# Docker Deployment Guide

## 🐳 Quick Start

### Build and Run (Production)

```bash
# Build the Docker image
docker build -t healthflow-frontend:latest .

# Run the container
docker run -d -p 3000:80 --name healthflow-frontend healthflow-frontend:latest

# Access the application
# Open http://localhost:3000
```

### Using Docker Compose (Production)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## 🛠️ Development Mode

```bash
# Start development environment with hot reload
docker-compose -f docker-compose.dev.yml up

# The app will be available at http://localhost:5173
```

## 📦 Build Commands

### Build Production Image
```bash
docker build -t healthflow-frontend:1.0.0 .
```

### Build with Custom Build Args
```bash
docker build \
  --build-arg NODE_ENV=production \
  -t healthflow-frontend:latest .
```

### Multi-platform Build
```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t healthflow-frontend:latest \
  --push .
```

## 🚀 Deployment

### Push to Docker Registry
```bash
# Tag the image
docker tag healthflow-frontend:latest your-registry.com/healthflow-frontend:latest

# Push to registry
docker push your-registry.com/healthflow-frontend:latest
```

### Deploy to Kubernetes
```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -l app=healthflow-frontend
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for production:

```env
VITE_API_BASE_URL=https://api.healthflow.com
VITE_USE_MOCK_DATA=false
```

### Using with Backend Services
Uncomment the backend services in `docker-compose.yml`:

```yaml
services:
  healthflow-frontend:
    # ... frontend config
  
  patients-service:
    image: healthflow/patients-service:latest
    ports:
      - "8001:8000"
```

## 📊 Monitoring

### Check Container Health
```bash
docker ps
docker inspect healthflow-frontend
```

### View Logs
```bash
docker logs healthflow-frontend
docker logs -f healthflow-frontend  # Follow logs
```

### Access Container Shell
```bash
docker exec -it healthflow-frontend sh
```

## 🧹 Cleanup

```bash
# Stop and remove container
docker stop healthflow-frontend
docker rm healthflow-frontend

# Remove image
docker rmi healthflow-frontend:latest

# Clean up everything
docker-compose down -v --rmi all
```

## 📝 Notes

- The production image uses nginx to serve the built static files
- Health check endpoint: `http://localhost:3000/health`
- Default ports:
  - Frontend (production): 3000 → 80
  - Frontend (development): 5173
  - Backend services: 8001-8004

## 🔒 Security

- The nginx configuration includes security headers
- API proxy can be configured in `nginx.conf`
- Use environment variables for sensitive data
- Don't commit `.env` files to version control

## 🐛 Troubleshooting

### Container won't start
```bash
docker logs healthflow-frontend
```

### Port already in use
```bash
# Use a different port
docker run -d -p 8080:80 healthflow-frontend:latest
```

### Rebuild after changes
```bash
docker-compose build --no-cache
docker-compose up -d
```
