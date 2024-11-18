app_name = "vision_app"
app_title = "Vision App"
app_publisher = "Your Name"
app_description = "Vision System Application"
app_email = "your@email.com"
app_license = "MIT"

# Document Events
doc_events = {
    "Vision Analytics": {
        "after_insert": "vision_app.api.process_analytics",
    }
}