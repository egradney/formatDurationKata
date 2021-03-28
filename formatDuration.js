function formatDuration (seconds) {
    if (seconds === 0) {
      return 'now';
    };
    let years = Math.floor(seconds / 31536000);
    let days = Math.floor((seconds - (years * 31536000)) / 86400 );
    let hours = Math.floor((seconds - (years * 31536000) - (days * 86400)) / 3600);
    let minutes = Math.floor((seconds - (years * 31536000) -(days * 86400) - (hours * 3600)) / 60);  
    let secs = seconds - (years * 31536000) - (days * 86400) - (hours * 3600) - (minutes * 60);
    let output = [];
    if (years > 0) {
        if (years === 1) {
        output.push(`${years} year`); 
        } else {
        output.push(`${years} years`);
        }; 
    };
    if (days > 0) {
        if (days === 1) {
        output.push(`${days} day`); 
        } else {
        output.push(`${days} days`);
        }; 
    };
    if (hours > 0) {
        if (hours === 1) {
        output.push(`${hours} hour`); 
        } else {
        output.push(`${hours} hours`);
        }; 
    };
    if (minutes > 0) {
        if (minutes === 1) {
        output.push(`${minutes} minute`); 
        } else {
        output.push(`${minutes} minutes`);
        }
    };
    if (secs > 0) {
        if (secs === 1) {
        output.push(`${secs} second`);
        } else {
        output.push(`${secs} seconds`);
        }
    };
    if (output.length === 1) {
        return `${output}`;
    } else if (output.length === 2) {
        return `${output[0]} and ${output[1]}`;
    } else if (output.length === 3) {
        return `${output[0]}, ${output[1]} and ${output[2]}`;
    } else if (output.length === 4) {
        return `${output[0]}, ${output[1]}, ${output[2]} and ${output[3]}`;
    } else if (output.length === 5) {
        return `${output[0]}, ${output[1]}, ${output[2]}, ${output[3]} and ${output[4]}`;
    };
};

formatDuration(1);
formatDuration(62);
formatDuration(120);
formatDuration(3600);
formatDuration(3662);