import PropTypes from "prop-types";

export function Filtered({handleFilterChange, filters}) {

    return (<div className='view'>
            <button className={`view_btn ${filters === 'all' ? 'view_current' : ''}`}
                    onClick={() => handleFilterChange('all')}
            >
                All
            </button>
            <button className={`view_btn ${filters === 'active' ? 'view_current' : ''}`}
                    onClick={() => handleFilterChange('active')}
            >
                Active
            </button>
            <button className={`view_btn ${filters === 'done' ? 'view_current' : ''}`}
                    onClick={() => handleFilterChange('done')}
            >
                Done
            </button>
        </div>
    )
}

Filtered.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.string.isRequired,
}